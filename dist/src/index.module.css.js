
const digest = '073c530568106d5c90191a56917c65b6b193f3583244df784fb8a33cdfe18d2d';
const css = `._Tabs_1v5ll_1 {
  display: flex;
  overflow: auto;
  background: var(--cui-black-color-100);
}

@media (prefers-color-scheme: dark) {
  ._Tabs_1v5ll_1 {
    background: var(--cui-black-color-900);
  }
}

._Tabs_1v5ll_1:not(:first-child) {
  margin-top: 20px;
}

._tab_1v5ll_33 {
  flex: 1;
  padding: 15px 20px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  font-weight: bold;
  text-align: center;
}

._tab_1v5ll_33[class*="_isActive"] {
  border-bottom-color: var(--cui-accent-color-700);
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"Tabs":"_Tabs_1v5ll_1","tabs":"_Tabs_1v5ll_1","tab":"_tab_1v5ll_33"};
export { css, digest };
  