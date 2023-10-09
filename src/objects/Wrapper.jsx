import styled from 'styled-components';
import PropTypes from 'prop-types'

const Wrap = styled.div`
  
`;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired
}

export default function Wrapper({ children, className}) {
  return (
    <>
      <Wrap className={className}>{children}</Wrap>
    </>
  )
}
