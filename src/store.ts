




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



const repoUpdateInfos = new Map()




export function setUpdate(info: RepoUpdateInfo) {
    repoUpdateInfos.set(info.repoName, info)
}


export function getUpdates(): RepoUpdateInfo[] {
    return Array.from(repoUpdateInfos.values())
}