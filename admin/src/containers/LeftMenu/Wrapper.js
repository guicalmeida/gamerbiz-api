/**
 *
 * Wrapper
 *
 */

import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => props.theme.main.sizes.leftMenu.width};
  background: #0B0F14;

  /* scrollbar overrides */
  * {
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #e6e5e5;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #e6e5e5;
    }

    /* firefox */
    scrollbar-color: #e6e5e5;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        strapi: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
