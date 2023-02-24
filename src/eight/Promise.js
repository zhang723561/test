class newPromise {
    // 设定状态值
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    constructor(func){
        // 初始化状态值及结果值
        this.PromiseState = newPromise.PENDING
        this.PromiseResult = null;
        // this指向绑定
        try{
            func(this.resolve.bind(this),this.reject.bind(this))
        } catch(err){
            this.reject(err)
        }

    }

    resolve(res){
        // 状态变更  结果赋予
        if(this.PromiseState === newPromise.PENDING){
            this.PromiseState = newPromise.FULFILLED
            this.PromiseResult = res
        }
    }

    reject(reason){
        if(this.PromiseState === newPromise.PENDING){
            this.PromiseState = newPromise.REJECTED
            this.PromiseResult = reason
        }
    }

    // 根据状态处理结果
    then(onFulfilled,onRejected){
         if( this.PromiseState === newPromise.FULFILLED){
             onFulfilled(this.PromiseResult)
         }

         if( this.PromiseState === newPromise.REJECTED){
             onRejected(this.PromiseResult)
         }


    }
}