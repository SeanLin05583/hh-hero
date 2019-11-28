const postcss = require('postcss');

const overrideAtRule = mediaStr => mixin => {
  const parent = mixin.parent;
  const root = mixin.root();
  const rule = postcss.rule({ selector: parent.selector });
  const atRule = postcss.atRule({ name: mediaStr });
  rule.append(mixin.nodes);
  atRule.append(rule);
  root.append(atRule);
  mixin.remove();
};

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-mixins')({
      mixins: {
        isMobile: overrideAtRule(`media screen and (max-width: 768px)`),
      },
    }),
    require('postcss-nested'),
  ],
};
