<script lang="ts">
  import type { PageData } from './$types'
  import * as Form from '$lib/components/ui/form'
  import { schema } from './schema'

  export let data: PageData

  const poemPlacehoder = `(En Orihuela, su pueblo y el mío
    Se nos ha muerto como del rayo Ramón Sijé
    A quien tanto quería)

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
    Y siento más tu muerte que mi vida...`
</script>

<Form.Root form={data.form} {schema} let:config method="POST" class="mb-8 flex flex-col">
  <section>
    <h2
      class="scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Información sobre el autor
    </h2>
    <div
      class="mx-auto grid grid-flow-col grid-rows-3 items-center gap-y-8 lg:mt-8 lg:w-[900px] lg:grid-cols-2 xl:mt-10 xl:w-[1100px]"
    >
      <Form.Field {config} name="name">
        <Form.Item class="mx-auto">
          <Form.Label>Nombre</Form.Label>
          <Form.Input placeholder="Andrés Bello" class="w-80" />
          <Form.Description>Introduzca el nombre del autor del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="pseudonim">
        <Form.Item class="mx-auto">
          <Form.Label>Pseudónimo</Form.Label>
          <Form.Input placeholder="El Cisne del Anauco" class="w-80" />
          <Form.Description>Introduzca el pseudónimo del autor del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="gender">
        <Form.Item class="lg:ml-16 xl:ml-28">
          <Form.Label>Género del autor</Form.Label>
          <Form.Select>
            <Form.SelectTrigger placeholder="Género" class="w-52" />
            <Form.SelectContent>
              <Form.SelectItem value="MALE">Masculino</Form.SelectItem>
              <Form.SelectItem value="FEMALE">Femenino</Form.SelectItem>
            </Form.SelectContent>
          </Form.Select>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="birthDate">
        <Form.Item class="mx-auto">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Input placeholder="aaaa-mm-dd" class="w-80" />
          <Form.Description>Introduzca la fecha de nacimiento del autor del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="deathDate">
        <Form.Item class="mx-auto">
          <Form.Label>Fecha de fallecimiento</Form.Label>
          <Form.Input placeholder="aaaa-mm-dd" class="w-80" />
          <Form.Description
            >Introduzca la fecha de fallecimiento del autor del poema</Form.Description
          >
          <Form.Validation />
        </Form.Item>
      </Form.Field>
    </div>
  </section>
  <section class="mt-5">
    <h2
      class="scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Información sobre el Poema como Obra
    </h2>
    <div
      class="mx-auto grid grid-rows-3 items-center gap-x-2 gap-y-8 lg:mt-8 lg:w-[900px] lg:grid-cols-3 xl:mt-10 xl:w-[1100px]"
    >
      <Form.Field {config} name="title">
        <Form.Item class="mx-auto">
          <Form.Label>Título</Form.Label>
          <Form.Input placeholder="Elegía" class="w-80" />
          <Form.Description>Introduzca el título del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="genre">
        <Form.Item class="mx-auto">
          <Form.Label>Género</Form.Label>
          <Form.Input placeholder="Oda" class="w-80" />
          <Form.Description>Introduzca el género literario del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="originalLanguage">
        <Form.Item class="-mt-7 lg:ml-16 xl:ml-32">
          <Form.Label>Idioma original del poema</Form.Label>
          <Form.Select>
            <Form.SelectTrigger placeholder="Idioma" class="w-52" />
            <Form.SelectContent>
              <Form.SelectItem value="Español">Español</Form.SelectItem>
              <Form.SelectItem value="Inglés">Inglés</Form.SelectItem>
              <Form.SelectLabel>Lenguas indigenas</Form.SelectLabel>
              <Form.SelectItem value="Pemón">Pemón</Form.SelectItem>
              <Form.SelectItem value="Yekuana">Yekuana</Form.SelectItem>
              <Form.SelectItem value="Panare">Panare</Form.SelectItem>
              <Form.SelectItem value="Akawayo">Akawayo</Form.SelectItem>
              <Form.SelectItem value="Sanemá">Sanemá</Form.SelectItem>
            </Form.SelectContent>
          </Form.Select>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="elaborationStartDate">
        <Form.Item class="mx-auto">
          <Form.Label>Fecha inicial de escritura</Form.Label>
          <Form.Input placeholder="aaaa-mm-dd" class="w-80" />
          <Form.Description class="w-80"
            >Introduzca la fecha en que el autor comenzó a escribir el poema</Form.Description
          >
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="elaborationEndDate">
        <Form.Item class="mx-auto">
          <Form.Label>Fecha final de escritura</Form.Label>
          <Form.Input placeholder="aaaa-mm-dd" class="w-80" />
          <Form.Description class="w-80"
            >Introduzca la fecha en que el autor finalizó la escritura del poema</Form.Description
          >
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="subject">
        <Form.Item class="mx-auto -mt-5">
          <Form.Label>Temática</Form.Label>
          <Form.Input placeholder="El río Orinoco" class="w-80" />
          <Form.Description>Introduzca la temática del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="description">
        <Form.Item class="col-span-2 xl:ml-5">
          <Form.Label>Descripción</Form.Label>
          <Form.Textarea
            placeholder="“Elegía” es un poema de Miguel Hernández perteneciente al libro «El rayo que no cesa» (1936). Este poema fue dedicado a la memoria de su “compañero del alma”, José Ramón Marín Gutiérrez."
            class="w-[90%] resize-none"
            rows={3}
          />
          <Form.Description>Introduzca una descripción del poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
      <Form.Field {config} name="elaborationPlaces">
        <Form.Item class="mx-auto -mt-10">
          <Form.Label>Sitios de publicación</Form.Label>
          <Form.Input placeholder="aaaa-mm-dd" class="w-80" />
          <Form.Description>Introduzca los sitios en que se publicó el poema</Form.Description>
          <Form.Validation />
        </Form.Item>
      </Form.Field>
    </div>
  </section>
  <section class="mt-5">
    <h2
      class="scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Escriba el Poema
    </h2>
    <div class="mx-auto lg:mt-8 lg:w-[400px] xl:mt-10 xl:w-[600px]">
      <Form.Field {config} name="poem">
        <Form.Item class="mx-auto">
          <Form.Textarea placeholder={poemPlacehoder} class="resize-none text-center" rows={22} />
          <Form.Validation />
        </Form.Item>
      </Form.Field>
    </div>
  </section>
  <Form.Button class="ml-auto mr-8">Subir Poema ↑</Form.Button>
</Form.Root>
