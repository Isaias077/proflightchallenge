interface LogoItemProps
{
    logoImage: string;
    status: boolean;
}

function LogoItem(props: LogoItemProps)
{
    const validation = props.status ? ' ' : ' disabled';

    return(<div className={'logo-item ' + validation}>
        <img src={props.logoImage} alt="logo" width={'150px'}/>
    </div>)
}

export default LogoItem;
