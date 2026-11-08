import { Box, type BoxProps } from '../../primitives';
import type { Spacing } from '../../theme';

export type StackProps = Omit<BoxProps, 'flexDirection' | 'gap'> & {
  direction?: 'row' | 'column';
  gap?: Spacing;
};

/** Lays children out in a row or column with a theme gap between them. */
export function Stack({ direction = 'column', gap = 'm', ...rest }: StackProps) {
  return <Box flexDirection={direction} gap={gap} {...rest} />;
}
