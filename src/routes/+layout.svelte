<script>
  import '../app.pcss'
  import { ModeWatcher } from 'mode-watcher'
  import PageHeader from '$lib/components/page-header.svelte'
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col gap-6 p-4 md:p-3 lg:p-2">
  <PageHeader />
  <slot />
</div>
