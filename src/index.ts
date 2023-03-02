import { text } from '@clack/prompts';

async function main() {
  console.clear();

  const path = await text({
    message: 'Where should we create your project?',
    placeholder: './',
    validate: (value) => {
      if (!value) return 'Please enter a path.';
      if (value[0] !== '.') return 'Please enter a relative path.';
    },
  });

  const jsonPath = await text({
    message: 'Where should we store the json config file?',
    placeholder: './',
    validate: (value) => {
      if (!value) return 'Please enter a path.';
      if (value[0] !== '.') return 'Please enter a relative path.';
    },
  });
}

main().catch(console.error);
