import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const TypesTpl: React.FC = () => {
    return (
        <>
           <Title level={3}>TS一些需要注意点</Title>
           <Paragraph>
                <Paragraph>
                    <Text strong>首先我们要知道什么是typescript：</Text>
                </Paragraph>
                <Text>简单来说：TypeScript是JavaScript的超集，具有类型系统，支持ES6语法，支持面向对象编程的概念，如<Text mark>类、接口、继承、泛型</Text>等，它可以编译成普通的JavaScript代码。 以下简称TS</Text>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>为什么要用TS呢？</Text>
                </Paragraph>
                <Text>那当然是因为TS支持ES6，且支持接口、泛型等规范、编译报错提示等，可使我们的代码更加规范且不会引发奇怪bug；</Text>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>TS有那些类型呢？</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>数字类型： let n: <Text mark>number</Text> = 1</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>字符串类型：let s: <Text mark>string</Text> = "hello xiaohuihui"</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>布尔类型：  let b: <Text mark>boolean</Text> = true/false</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>数组类型：  let arr: <Text>number[]</Text> = [1,2,3,4]</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>元组类型：  let x: <Text mark>[string, number]</Text>; x = ['hello', 10];</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>枚举类型：  enum name [Object]</Text>
                </Paragraph>
                <Paragraph code>
                    <Text>对象：object，用不存在的值：never，函数无返回值：void，还有null,undefined,any;</Text>
                </Paragraph>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>TS中一个比较重要且常用的东西：接口(interface)</Text>
                </Paragraph>
                <Paragraph>
                    <Paragraph>
                        <Text strong>什么是接口，它有那些特性呢？</Text>
                    </Paragraph>
                    <Text>TS的核心原则之一就是对值所具有的结构进行类型检查，它有时被称为<Text mark>“鸭式辩型法”或“结构性子类型化”</Text>。</Text>
                </Paragraph>
                <Paragraph>
                    <Paragraph>
                        <Text strong>特性：</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text>1：定义对象、数组、函数、类等。</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text>2：接口可以相互继承</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text> 3：接口可以继承类</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text> 4：可选属性与额外检查</Text>
                    </Paragraph>
                </Paragraph>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>TS中的类型别名type和接口interface有什么异同点？</Text>
                </Paragraph>
                <Paragraph>
                    <Paragraph>
                        <Text strong>相同点：</Text>
                    </Paragraph>
                    <Text>type和interface都可以作用于原始值，联合类型，元组等任何类型；</Text>
                </Paragraph>
                <Paragraph>
                    <Paragraph>
                        <Text strong>差异点：</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text>type不能extends和implements；</Text>
                    </Paragraph>
                    <Paragraph>
                        <Text>type拓展使用 & [Object]  例如：type name1 = name & [Object]</Text>
                    </Paragraph>
                </Paragraph>
                
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>TS中的Declare关键字用来做什么？</Text>
                </Paragraph>
                <Paragraph>
                    <Text>我们平时引用第三方插件时候，一般第三方插件会有ts版本的支持，我们只需要安装ts版本的用来即可使用，但是有的并没有提供ts版本的支持(即没有提供xx.d.ts)，那我们怎么处理呢？这就用到了declare，例如：declare module 'cytoscape-klay';</Text>
                </Paragraph>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>TS中的泛型是什么，可以做什么？</Text>
                </Paragraph>
                <Paragraph>
                    <Text>泛型代表的是泛指某一类型，更像是一个类型变量，以下是泛型的几种用法(场景不是很全):</Text>
                </Paragraph>
            </Paragraph>
            <Divider/>
            <Paragraph>
                <Paragraph>
                    <Text strong>下面是在实际工作中用的一些注意点：</Text>
                </Paragraph>
                <Paragraph>
                    <Text>1、在大多数不确定类型的场景下，用unknown替代any；</Text>
                </Paragraph>
                <Paragraph>
                    <Text>2、当方法没有返回时候，用void可以避免空指针导致的错误；</Text>
                </Paragraph>
                <Paragraph>
                    <Text>3、??运算符：??与||的功能是相似的，区别是??在左侧表达式结果为 null 或者 undefined 时，才会返回右侧表达式 。</Text>
                </Paragraph>
                <Paragraph>
                    <Text>4、当方法中定义的参数没有使用时候，可以使用前下划线标识，例如：_item；</Text>
                </Paragraph>
                <Paragraph>
                    <Text>5、typeof: 可以用来获取一个<Text mark>变量</Text>或<Text mark>对象的类型</Text>；</Text>
                </Paragraph>
                <Paragraph>
                    <Text>6、泛型工具方法：</Text>
                </Paragraph>
                <Paragraph>
                    <Text>- Partical: 可以使泛型中的所有类型变为可选;</Text>
                </Paragraph>
                <Paragraph>
                    <Text>- Pick: 将 T 类型中的 K 键列表提取出来，生成新的子键值对类型。</Text>
                </Paragraph>
                <Paragraph>
                    <Text>- Omit: 将 T 中包含 K (键)属性剔除。</Text>
                </Paragraph>
                <Paragraph>
                    <Text>- Exclude: 将 T 中包含 U 的属性剔除，返回其余部分</Text>
                </Paragraph>
            </Paragraph>
            <Divider/>
        </>
    )
}

export default TypesTpl