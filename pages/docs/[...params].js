import {useRouter} from 'next/router'
//catch all routes
function Doc() {
    const router = useRouter()
    const params = router.queru
  return <h1>Doc </h1>;
}

export default Doc;
