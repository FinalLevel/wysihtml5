/**
 * document.execCommand("foreColor") will create either inline styles (firefox, chrome) or use font tags
 * which we don't want
 * Instead we set a css class
 */
(function(wysihtml5) {
  var REG_EXP = /wysiwyg-background-color-[0-9a-z]+/g;
  
  wysihtml5.commands.backgroundColor = {
    exec: function(composer, command, color) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-background-color-" + color, REG_EXP);
    },

    state: function(composer, command, color) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-background-color-" + color, REG_EXP);
    }
  };
})(wysihtml5);
