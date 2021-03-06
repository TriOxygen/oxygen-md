import React, { Component, PropTypes } from 'react';
import { Colors } from './Styles';
import classNames from 'classnames';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    secondary: PropTypes.bool,
    padded: PropTypes.bool,
    spaced: PropTypes.bool,
  };

  static defaultProps = {
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const {
      padded,
      spaced,
      fullWidth,
      children,
      className,
      secondary,
      ...other
    } = this.props;

    const { shade } = this.context.mdTheme;
    const classes = classNames(
      className,
      css.root,
      shade === 'light' ? css.dark : css.light,
      {
        [css.secondary]: secondary,
        [css.padded]: padded,
        [css.fullWidth]: fullWidth,
        [css.spaced]: spaced
      }
    );
    return (
      <p {...other} className={classes}>{children}</p>
    );
  }
}

export default Text;

const css = oxygenCss({
  root: {
    margin: `0 0 ${Units.phone.gutter.mini}px 0`,
    whiteSpace: 'pre-line',
    '&dark': {
      color: Colors.text.dark.default
    },
    '&light': {
      color: Colors.text.light.default
    },
    '&secondary': {
      '&dark': {
        color: Colors.text.dark.secondary
      },
      '&light': {
        color: Colors.text.light.secondary
      }
    },
  },
  fullWidth: {
    display: 'block',
  },
  padded: {
    padding: Units.phone.gutter.mini / 2,
  },
  spaced: {
    margin: Units.phone.gutter.mini / 2,
  },
});