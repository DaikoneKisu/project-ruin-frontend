<script lang="ts">
  import type { PageData } from './$types'
  import * as Form from '$lib/components/ui/form'
  import PoemCard from '$lib/components/poem-card.svelte'
  import { classifierByVerseFormSchema } from './schema'

  export let data: PageData

  const poems = [
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    },
    {
      title: 'Elegía',
      author: 'Miguel Hernández',
      startDate: '15/1/1964',
      endDate: '28/10/1979',
      poem: `
        Yo quiero ser llorando el hortelano
        De la tierra que ocupas y estercolas
        Compañero del alma tan temprano

        Alimentando lluvias, caracolas
        Y órganos mi dolor sin instrumentos
        A las desalentadas amapolas
        Daré tu corazón por alimento
        Tanto dolor se agrupa en mi costado
        Que por doler, me duele hasta el aliento

        Un manotazo duro, un golpe helado
        Un hachazo invisible y homicida
        Un empujón brutal te ha derribado

        No hay extensión más grande que mi herida
        Lloro mi desventura y sus conjuntos
        Y siento más tu muerte que mi vida

        Ando sobre rastrojos de difuntos
        Y sin calor de nadie y sin consuelo
        Voy de mi corazón a mis asuntos
      `
    }
  ]
</script>

<h1 class="mx-auto scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Clasificar por Verso
</h1>

<Form.Root
  form={data.form}
  schema={classifierByVerseFormSchema}
  let:config
  method="POST"
  action="/classifier/by-verse"
  class="mt-4 flex gap-1 xl:justify-center"
>
  <Form.Field {config} name="syllables">
    <Form.Select>
      <Form.SelectTrigger placeholder="Número de sílabas" class="ml-4 mr-3 w-52 xl:ml-0" />
      <Form.SelectContent>
        <Form.SelectItem value="2">2 sílabas</Form.SelectItem>
        <Form.SelectItem value="3">3 sílabas</Form.SelectItem>
        <Form.SelectItem value="4">4 sílabas</Form.SelectItem>
        <Form.SelectItem value="5">5 sílabas</Form.SelectItem>
        <Form.SelectItem value="6">6 sílabas</Form.SelectItem>
        <Form.SelectItem value="7">7 sílabas</Form.SelectItem>
      </Form.SelectContent>
    </Form.Select>
    <Form.Validation />
  </Form.Field>
  <Form.Field {config} name="author">
    <Form.Input placeholder="Nombre del autor" type="text" class="w-96" />
    <Form.Validation />
  </Form.Field>
  <Form.Button>Buscar</Form.Button>
</Form.Root>

<div
  class="mx-auto mt-4 grid items-center gap-y-12 lg:w-[900px] lg:grid-cols-2 xl:w-[1350px] xl:grid-cols-3"
>
  {#each poems as poem}
    <PoemCard {...poem} />
  {/each}
</div>
