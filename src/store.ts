
import path from 'path'
import fse from 'fs-extra'



const DATA_FILE = path.join(process.cwd(), 'data', 'data.json')

fse.ensureFileSync(DATA_FILE)

export class RepoUpdateInfo {

    repoName: string
    lastVer: string
    lastUrl: string 

    constructor(repoName: string, lastVer: string, lastUrl: string) {
        this.repoName = repoName
        this.lastVer = lastVer 
        this.lastUrl = lastUrl
    }
}



const repoUpdateInfos = new Map<string, RepoUpdateInfo>()



export function load() {
    if(fse.existsSync(DATA_FILE)) {
        const data: Map<string, RepoUpdateInfo> = new Map(fse.readJsonSync(DATA_FILE))
        data.forEach((value, key) => repoUpdateInfos.set(key, value))
    }
}


export function setUpdate(info: RepoUpdateInfo) {
    repoUpdateInfos.set(info.repoName, info)
    fse.writeJson(DATA_FILE, Array.from(repoUpdateInfos), {spaces:2})
       .then(() => console.log('store save succ'))
       .catch(err => console.error(err))
}


export function getUpdates(): RepoUpdateInfo[] {
    return Array.from(repoUpdateInfos.values())
}