import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'
import Index from './pages/index'
import Show from "./pages/Show"
import { peopleLoader } from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"
import { personLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<App/>}>
    <Route path="" element={<Index/>} loader={peopleLoader}></Route>
    <Route path=':id' element={<Show/>} loader={personLoader}></Route>
    <Route path='create' action={createAction}></Route>
    <Route path="update/:id" action={updateAction}></Route>
    <Route path="delete/:id" action={deleteAction}/>
</Route>))

export default router