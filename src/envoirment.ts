export class envoirment {
    api : string = "http:localhost:8080/"

    generateApiWithRoute(route : string){
        return this.api + "/" + route;
    }

}