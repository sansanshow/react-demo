/**
 * 函数式组件
 */
import React from 'react';
const FuncComponent = (props) => {
    const sayHi = (e) => alert('Hello world')
    return (
        <div onClick={ sayHi }>Click SayHi</div>
    )
}
export default FuncComponent;