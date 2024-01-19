<script lang="ts">
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
  import img from '$lib/images/andres-cuadro.png'
  import bookOpenIcon from '$lib/icons/book-open.svg'
  import brushIcon from '$lib/icons/brush.svg'
  import type { appRoutes } from '$lib/types/app-routes.type'
  import ModeToggleButton from '$lib/components/mode-toggle-button.svelte'

  type Clasifier = {
    title: string
    description: string
    href: appRoutes
  }

  let mainPageRoute: appRoutes = '/'
  let uploadPoemRoute: appRoutes = '/upload-poem'
  let clasifiers: Clasifier[] = [
    {
      title: 'Por verso',
      description: 'Es una clasificación por el número de sílabas de cada verso.',
      href: '/classifier/by-verse'
    },
    {
      title: 'Por estrofa',
      description: 'Es una clasificación en base a características de las estrofas.',
      href: '/classifier/by-stanza'
    },
    {
      title: 'Por rima',
      description: 'Es una clasificación en la forma en que cada verso rima con otro.',
      href: '/classifier/by-rhyme'
    }
  ]
</script>

<header class="flex justify-between">
  <nav>
    <ul class="flex gap-3 [&>li]:p-3">
      <li><a href={mainPageRoute}>Página Principal</a></li>
      <li><a href={uploadPoemRoute}>Subir un Poema</a></li>
      <li>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Clasificador</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <ul
              class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] [&>li:nth-child(2)]:pt-2"
            >
              <li class="row-span-3">
                <div class="flex h-full w-full select-none lg:w-[180px]">
                  <img class="rounded-md object-cover" src={img} alt="Imagen de Andrés Bello" />
                </div>
              </li>
              {#each clasifiers as clasifier}
                <li class="pb-4 text-sm last-of-type:pb-2">
                  <a href={clasifier.href}>
                    <span>{clasifier.title}</span>
                    <p>{clasifier.description}</p>
                  </a>
                </li>
              {/each}
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </li>
    </ul>
  </nav>
  <div class="flex flex-col items-center gap-3">
    <img class="h-12 w-12" src={bookOpenIcon} alt="" />
    <img class="absolute -translate-x-1.5 translate-y-1.5" src={brushIcon} alt="" />
    <ModeToggleButton />
  </div>
</header>
