import styled from 'styled-components';
import PropTypes from 'prop-types'

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const Progress = styled.div`
  /* width: 90%;  */
  height: 100%;
  background-color: #000; 
  border-radius: 5px;
`

ProgressBar.propTypes = {
  style: PropTypes.node.isRequired
}

export default function ProgressBar({ style }) {
  return (
    <>
      <Bar>
        <Progress style={style} />
      </Bar>
    </>
  )
}
