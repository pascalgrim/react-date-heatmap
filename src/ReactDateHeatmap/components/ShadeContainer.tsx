import Shade from './Shade'


type ShadeContainerProps = {
    shades: string[],
}
function ShadeContainer({ shades }: ShadeContainerProps) {
    return (
        <div className='shade-container'>
            {shades.map((color,i) => <Shade color={color} key={i} size={16} />)}
        </div>
    )
}

export default ShadeContainer