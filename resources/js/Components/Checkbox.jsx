export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-blue-400 shadow-sm hover:cursor-pointer focus:ring-transparent' +
                className
            }
        />
    );
}
