const ModalStatus = ({text}: {text: string}) => {
    return (
        <p dangerouslySetInnerHTML={{__html: text}}/>
    )
}

export default ModalStatus;