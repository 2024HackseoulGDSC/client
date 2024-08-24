import styles from './threeitems.module.css'

const ThreeItemsList = ({itemListJson = []}) => {
    return(
        <div className={styles.threeContainer}>
            {itemListJson.map(item=><a href={item.productUrl}><img className={styles.item} key={item.id} src={item.image}/></a>)}
        </div>
    )
}

export default ThreeItemsList