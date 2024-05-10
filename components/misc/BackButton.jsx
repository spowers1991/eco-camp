
import Link from 'next/link';
import resolveLink from '../../utils/ResolveLink';

const BackButton = ({content}) => {    
    return(
        <Link href={resolveLink('/')} className={'font-bebas-neue bg-[#f3f9f6] uppercase text-lg sm:text-xl font-[500] !tracking-wider leading-[1] !text-[#333] max-w-fit px-6 sm:px-0 mb-6'}>
            {content}
        </Link>
    )
}

export default BackButton