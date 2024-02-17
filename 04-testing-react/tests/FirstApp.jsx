import PropTypes from 'prop-types';

// const newMessage = {
//     num: 123,
//     text: 'Hola'
// };

// const printMessage = (message) => {
//     return JSON.stringify(message)
// }

export const FirstApp = ({title, subTitle,name}) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            {/* <h2>{printMessage(newMessage)}</h2> */}
            <h2>{subTitle + 4}</h2>
            <h3>{name}</h3>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}
FirstApp.defaultProps = {
    name : 'Laysson',
    subTitle: 'No hay subtitulo',
    title: 'No hay ningun titulo',
}