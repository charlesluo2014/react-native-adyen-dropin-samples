package com.adyen.checkout.card;

import com.adyen.checkout.base.api.ImageLoader;
import com.adyen.checkout.card.data.CardType;

import java.util.List;

public class CustomCardUtils {
    public static CardListAdapter newCardList(ImageLoader imageLoader, List<CardType> supportedCards) {
        return new CardListAdapter(imageLoader, supportedCards);
    }
}
