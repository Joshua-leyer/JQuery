// const log = console.log
/**!
 * author: joshua,
 * https://github.com/Joshua-leyer/JQuery
 */
;(function($, window) {

    // 不很清楚 最外层要包一个 立即函数好处
    var Jview = (function() {
        function Jview(element, options) {
            this.settings = $.extend($.fn.bindView.def, options)
            console.log(this.settings)
            // console.log('设定的imgViewParent', this.settings.imgViewParent)
            this.imgViewParent = $(this.settings.imgViewParent)
            this.currentImg = element
            this.scrollMonitor = this.settings.monitor
            // console.log('Jview get dom is', element)
            // console.log('this imgViewParent is', this.imgViewParent)

            this.initView();
        }

        Jview.prototype = {
            
            initView: function() {
                /* make dom */
                // console.log('current img is', this.currentImg)
                const jmgBox = $("<div>").attr("id", "Jox").append("<img>")
                jmgBox.css("display", "none")
                let src = $(this.currentImg).attr("src")
                jmgBox.children("img").attr("src", src)
                // console.log('整个窗口的元素 is ', this.imgViewParent.tagName)
                this.imgViewParent.prepend(jmgBox)
                // console.log('initView dom is maked')
                this.viewImg(jmgBox)
            },
            viewImg: function(ele) {
                let $this = $(ele)
                $this.fadeIn('slow')
                // 判断点击消失.
                const that = this
                $this.on("click", function(event) {
                    let target = event.target
                    if ($(target).attr("id") == 'Jox') {
                        // console.log(true, 'j\' img close')
                        that.removeOut($this)
                    } else {
                        console.log(false, '4.2.4')
                    }
                })

                // 判断 scroll 
                if (this.scrollMonitor) {
                    let afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    log(afterScrollTop)
                    window.onscroll = function() {
                        let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        if (Math.abs(currentScrollTop - afterScrollTop) > 424 * 1.2) {
                            that.removeOut($this)
                        }
                    }
                }
            },
            removeOut: function(element) {
                $(element).fadeOut('fast', function() {
                    $("#Jox").remove()
                })
            }


        }

        return Jview
    })();

    $.fn.bindView = function(options) {
        let $imgs = $("img")
        // console.log($imgs)
        return $imgs.each(function(index, ele) {
            // let $this = $(this)  //$(this)是$imgs总的. 所有Imgs不是单个的
            // console.log('element is ', ele)
            $(ele).on('click', function(event) {
                // console.log('img was clicked', $(this))
                let target = event.target
                let instance = new Jview(target, options)  //这里实例化的是立即函数的名字,而立即函数中返回了同名的函数.只是在实例化的时候能立即调用。
            })
            // console.log('$this is >>', $this)
        })
    }

    // -------------------
    // 默认参数
    // -----------
    $.fn.bindView.def = {
        imgViewParent: $("body"),
        monitor: false,
        author: 'joshua'
    }

})(jQuery, window)
