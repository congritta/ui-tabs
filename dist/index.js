"use strict";import{jsx as t}from"react/jsx-runtime";import s from"./index.module.css";export default function i(a){return t("div",{className:[s.Tabs,a.tabsWrapperClassName].filter(Boolean).join(" "),children:a.tabs.map(e=>t("div",{className:[s.tab,...a.tabClassName?[a.tabClassName]:[],...e.value===a.activeTab?["_isActive"]:[]].join(" "),onClick:()=>a.onChange(e.value),children:e.element},e.value))})}