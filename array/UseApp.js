function useApp(apps, app){
    apps.push(app)
    return apps
}

console.log(useApp(["How do you", "Wanna die"], "asked bayu"))