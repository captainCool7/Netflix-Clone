import PropTypes from 'prop-types'
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
}

// if default not given it will give error
Header.propTypes={
    title: PropTypes.string.isRequired,
}

// Giving style to header
// const headerStyle = {
//     color:"red",
//     backgroundColor:"black",
// }
export default Header
