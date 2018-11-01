import React from "react";
import {createPortal} from "react-dom";
import classnames from "classnames";

const rootEle = document.body;

/**
 * show: 这个属性通过切换类名改变样式控制组件控制弹层的出现/隐藏
 * onSwitch: 通过传递函数，给予弹出层自我切换的方法
 * children: react组件自带属性
 */

export default ({show, onSwitch, children}) =>
    createPortal(
        <div>
            <img className={classnames("modal", {"modal-show": show})}
                 onClick={onSwitch}
                 src="http://yanxuan.nosdn.127.net/7914b4933270885e361592cfccc93536.png" alt=""/>
        </div>,
        rootEle
    );