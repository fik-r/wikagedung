import cn from 'classnames'
import useResponsive from '@/utils/media-query'
const CircleTab = ({ active, text, onClick }) => {
    const { isMobile } = useResponsive()
    return (
        <div onClick={() => { onClick() }} className={cn(active ? "bg-primary text-white" : "hover:bg-primary hover:text-white bg-white_smoke text-sooty", "hover:cursor-pointer w-text-button rounded-full h-[2.75rem] flex justify-center items-center", isMobile ? "w-[9.875rem]" : "w-[12.5rem]")}>{text}</div>
    )
}

export default CircleTab