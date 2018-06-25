Component({
    properties: {
        more: {
            type: Boolean,
            value: true,
            observer (newVal) {
                this.handlerMore(newVal)
            },
        }
    },

    data: {
        loadingText: false
    },

    attached () {
        this.handlerMore(this.properties.more)        
    },

    methods: {
        handlerMore (more) {
            this.setData({
                loadingText: more ? ' q>o<p 正在加载... ' : ' q>_<p 都被你看完了~~ ',
            })
        }
    }
});