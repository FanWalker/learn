
**版本 vue 2.9.1**

通过先创建一个vue实例来学习vue是如何工作的：

	let v = new Vue({
	    el: '#app',
	    data: {
	        a: 1,
	        b: [1, 2, 3]
	    }
	})

vue的构造函数在src\core\instance\index.js下：

	function Vue (options) {             
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword')
	  }
	  this._init(options)  //这里调用vue自身的_init()方法
	}

_init()方法在src\core\instance\init.js中定义：

	export function initMixin (Vue: Class<Component>) {
	  Vue.prototype._init = function (options?: Object) {       //options是个对象
	    const vm: Component = this
	    // a uid
	    vm._uid = uid++
	
	    、、、  //这里省略掉了一段代码
	
	    // a flag to avoid this being observed
	    vm._isVue = true
	    // merge options
	    if (options && options._isComponent) {         //在开发的时候不会使用_isComponent 选项， 所以走else的流程
	      initInternalComponent(vm, options)
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      )
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm)
	    } else {
	      vm._renderProxy = vm
	    }
	    // expose real self
	    vm._self = vm
	    initLifecycle(vm)
	    initEvents(vm)
	    initRender(vm)
	    callHook(vm, 'beforeCreate')
	    initInjections(vm) // resolve injections before data/props
	    initState(vm)
	    initProvide(vm) // resolve provide after data/props
	    callHook(vm, 'created')
	
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false)
	      mark(endTag)
	      measure(`vue ${vm._name} init`, startTag, endTag)
	    }
	
	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el)
	    }
	  }
	}


\_init() 方法在一开始的时候，在 this 对象上定义了两个属性：_uid 和 _isVue，然后使用策略对象合并参数选项