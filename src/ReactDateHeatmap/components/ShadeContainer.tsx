import Shade from './Shade'


type ShadeContainerProps = {
    shades: string[],
}
function ShadeContainer({ shades }: ShadeContainerProps) {
    return (
        <div className='shade-container'>
            {shades.map((color) => <Shade color={color} key={color} size={16} />)}
        </div>
    )
}

export default ShadeContainer