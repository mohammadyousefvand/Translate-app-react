import styled from 'styled-components'

const TextareaBox = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 20px;
`

const Textarea = styled.textarea`
    width: 100%;
    min-height: 250px;
    background: none;
    resize: none;
    border: none;
    outline: none;
    color: #333;
    padding: 20px;
    font-size: 20px;

    &::placeholder{
        color: #333;
        opacity: .7;
    }
`

const TextareaFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.first ? 'space-between' : 'end'};
    padding: 10px 15px;
    border-top: 1px solid rgba(75, 75, 75, 0.2);
    user-select: none;
`

const TextareaIconBox = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const TextareaIcon = styled.span`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 25px;
    background-color: rgba(0, 187, 255, 0.692);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`

const CopyText = styled.span`
    color: #333;
`

const TranslateButton = styled.button`
    width: 150px;
    height: 45px;
    background: tomato;
    border-radius: 10px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`

export {
    TextareaBox,
    Textarea,
    TextareaFooter,
    TextareaIconBox,
    TextareaIcon,
    TranslateButton,
    CopyText,
}