"""Модуль для сложения двух чисел."""

from numbers import Number

def add(a: Number, b: Number) -> Number:
    """Складывает два числа.
    
    Args:
        a: Первое число
        b: Второе число
        
    Returns:
        Сумма a и b
    """
    return a + b


def main() -> None:
    """Основная функция программы."""
    result = add(50, 2)
    print(result)


if __name__ == "__main__":
    main()
