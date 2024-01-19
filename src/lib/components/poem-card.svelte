<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { Button } from '$lib/components/ui/button'

  export let handleClick = () => {}
  export let title: string
  export let author: string
  export let startDate: string
  export let endDate: string
  export let poem: string
</script>

<Card.Root class="mx-auto h-[268px] w-[400px]">
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{author} - {startDate} - {endDate}</Card.Description>
  </Card.Header>
  <Card.Content>
    <p class="line-clamp-4">{poem}</p>
  </Card.Content>
  <Card.Footer>
    <Button on:click={handleClick}>Ver más información</Button>
  </Card.Footer>
</Card.Root>
