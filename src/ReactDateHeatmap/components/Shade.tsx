import "../styles.css"
type ShadeProps = {
    color: string,
    size: number
}
function Shade({ color, size }: ShadeProps) {
    return (
        <div style={{ backgroundColor: color, width: size, height: size }} className='shade' />
    )
}

export default Shade