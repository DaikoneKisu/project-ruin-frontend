<script lang="ts">
  import type { PageData } from './$types'
  import * as Form from '$lib/components/ui/form'
  import PoemCard from '$lib/components/poem-card.svelte'
  import { classifierByVerseFormSchema } from './schema'
  import type { Poem } from '$lib/types/poem.type'

  export let data: PageData

  const poems: Poem[] = data.poems.map((poem) => ({
    title: poem.title,
    author: poem.authors[0],
    startDate: String(poem.elaborationStartDate),
    endDate: String(poem.elaborationEndDate),
    tags: [poem.poemType, ...poem.stanzasTypes, ...poem.rhymes, String(poem.verseLength)],
    poem: poem.poemText
  }))
</script>

<h1 class="mx-auto scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Clasificar por Verso
</h1>

<!-- <Form.Root {schema} form={data.form} asChild let:enhance let:attrs>
	<form use:enhance {...attrs}>

</form>
</Form.Root> -->

<Form.Root
  form={data.form}
  schema={classifierByVerseFormSchema}
  let:config
  method="GET"
  class="mt-4 flex gap-1 xl:justify-center"
  asChild
  let:attrs
>
  <form {...attrs}>
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
  </form>
</Form.Root>

<div
  class="mx-auto mt-4 grid items-center gap-y-12 lg:w-[900px] lg:grid-cols-2 xl:w-[1350px] xl:grid-cols-3"
>
  {#each poems as poem}
    <PoemCard {...poem} />
  {/each}
</div>
