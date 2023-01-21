export const storageService = {
    query,
    get,
    postMany
}

interface Entity {
    _id: string;
    data: any;
}

async function query(entityType: any, delay = 600){
    
    var entities: any = JSON.parse(localStorage.getItem(entityType) || '[]') 
    if(!entities) entities = []
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(entities)
        }, delay)   
    })
    // return Promise.resolve(Entity)
}

async function get(entityType: string, entityId: string){
    return query(entityType)
        .then((entities:any) => entities.find((entity:any) => entity._id === entityId))
}

async function postMany(entityType: string, newEntities: any){
    return query(entityType)
        .then((entities:any) => {
            // newEntities = newEntities.map(entity => ({...entity, _id: _makeId()}))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _save(entityType: string, Entity: Entity[]) {
    localStorage.setItem(entityType, JSON.stringify(Entity))
}

