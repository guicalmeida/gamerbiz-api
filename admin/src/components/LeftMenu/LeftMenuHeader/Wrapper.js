import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logoWhite.svg";

const Wrapper = styled.div`
  background-color: #0B0F14;
  height: ${(props) => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: '#FFF';

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 5rem;
    margin-left: 2rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
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
