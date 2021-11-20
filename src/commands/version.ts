import type { Arguments, CommandBuilder } from 'yargs';

type Options = {};

export const command: string = 'version';
export const desc: string = 'Prints version';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.options({
      upper: { type: 'boolean' },
    });

export const handler = (argv: Arguments<Options>): void => {
  const version = `1.0.1\n`;
  process.stdout.write(version);
  process.exit(0);
};