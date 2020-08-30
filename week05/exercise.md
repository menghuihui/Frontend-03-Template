
练习一：

• div#a.b .c[id=x] 0 1 3 1 
• #a:not(#b) 0 2 0 0
• *.a 0 0 1 0
• div.a 0 0 1 1

1）*.a 0 0 1 0
2）#a:not(#b) 0 2 0 0
3）div#a.b .c[id=x] 0 1 3 1 
4）div.a 0 0 1 1


 为什么first-letter可以设置float之类的，而first-line不行呢?

 first-line选中的是第一行文字，不同的宽度选中的文字内容不一样，要对其重新布局排版消耗性能大所以不可以


 
