import cn from 'classnames'

const CircleTab = ({ active, text, onClick }) => {
    return (
        <div onClick={() => { onClick() }} className={cn(active ? "bg-primary text-white" : "hover:bg-primary hover:text-white bg-white_smoke text-sooty", "hover:cursor-pointer w-text-button rounded-full w-[12.5rem] h-[2.75rem] flex justify-center items-center")}>{text}</div>
    )
}

export default CircleTab