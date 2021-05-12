# JQuery


# jQuery 插件

## other home 

href : [https://github.com/ollieSk8/create_jq_plugins]

[http://caibaojian.com/jquery-extend-and-jquery-fn-extend.html]

```js
$.fn.greenify = function() {

    this.css( "color", "green" );
};
 
$( "a" ).greenify(); // 使得所有链接颜色为绿色。




```

jquery 所有的操作都可以.click()...去使用.  

通过$.fn.myFun = function() {} 的方式添加.

函数内部最后要return this. 来保证链式调用.

对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。

```js
看的一个文章说这种匿名立即函数的操作把变量私有化.

(function ( $ ) {
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( jQuery ));
```

也可以return this.each().  ??each()内部自带可链式
```js
$.fn.myFun = function() {
    return this.each(function() {

    })
}
```

```js 
$.extend()理解是在jquery内部添加静态的方法,变量.但是$(""). 出来的东西不能直接拿来用
官方的解释是: 扩展jQuery对象本身。


$.extend({
    color:"#333",
    min: function(a, b) { return a > b ? a:b}
})


```
这两个在官网 插件机制的一节里面有.

$.fn.extend()

$.extend()
官网案例中有这一套操作. 没看明白$.extend({}, options);接受两个参数的写法. md

在菜鸟教程看到的解释是extend()函数是合并对象的....
估计这里的用法是. {默认是这里的值} , 后面的options 是用户传递进来的数据.当key一样的时候就覆盖了.

csdn href: [https://blog.csdn.net/qq_33619285/article/details/71214570]
csdn href: [csdn_链接太长.](https://blog.csdn.net/weixin_42839080/article/details/81990518?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-1.control)

关于$.extend() , 看看官网:
// hrenf: [https://api.jquery.com/jQuery.extend/#jQuery-extend-target-object1-objectN]



```js
(function ( $ ) {
 
    $.fn.greenify = function( options ) {
 
        // 这里是配置的默认参数

        var settings = $.extend({
            
            color: "#556b2f",
            backgroundColor: "white"

        }, options );
 
        // Greenify 方法基于默认的参数设定
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));


```

```js
$( "div" ).greenify({
    color: "orange"
});
```

obj2 会对obj1里面重复的内容覆盖. 没有obj1中的内容就保留。

```js

<script>
    $(function () {
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97
        };
        var object2 = {
            apple:10,
            banana: { price: 200 },
            durian: 100
        };
        // 将 object2 递归合并到 object1中
        $.extend(object1, object2 );
        console.log(object1);
    })
</script>

```








