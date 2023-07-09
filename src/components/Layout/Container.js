import cn from 'classnames'
const Container = ({ className, children }) => {
    return (
        <div className={cn("flex flex-col w-full px-[6.25rem]", className)}>
            {children}
        </div>
    )
}

export default Container