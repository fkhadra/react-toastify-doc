import styled from "styled-components";

export const Code = styled.div`
  font-family: "Source Code Pro", Menlo, Monaco, Courier, monospace;
  font-size: 12px;
  line-height: 1.4;
  font-style: normal;
  border-left: 3px solid #a9547e;
  padding-left: 20px;
  background: #222;
  color: #fff;
  & div {
    margin-left: 20px;
  }
  & div:first-child,
  & div:last-child {
    margin: 0;
  }
`

/**
 * kind: 0 for component, 1 for props
 */
export const Element = styled.span<{ kind: 0 | 1 }>`
  color: ${props => props.kind === 0 ? '#66d9ef' : '#a6e22e'};
` 
