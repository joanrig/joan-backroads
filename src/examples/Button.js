import styled from 'styled-components'

const color='blue'

const Button = styled.button`
/* color:red; */
color:${ props => props.color };
background: ${color};
/* font-size:1rem; */
font-size:${props => props.big? '3rem' : '1rem'};
padding: 1rem;
margin: 1rem;
`

export default Button


// <Layout>
// <h1>hello from tours page !!!!</h1>
// <div>
// <Button big>first button</Button>
// <Button color="#f15205">second button</Button>
// </div>

// </Layout>